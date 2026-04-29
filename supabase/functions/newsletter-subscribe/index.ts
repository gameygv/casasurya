import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface SubscribeRequest {
  email: string;
  firstName?: string;
  lastName?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const MAILCHIMP_API_KEY = Deno.env.get("MAILCHIMP_API_KEY");
    const MAILCHIMP_AUDIENCE_ID = Deno.env.get("MAILCHIMP_AUDIENCE_ID");
    const MAILCHIMP_SERVER_PREFIX = Deno.env.get("MAILCHIMP_SERVER_PREFIX");

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID || !MAILCHIMP_SERVER_PREFIX) {
      throw new Error("Mailchimp configuration missing");
    }

    const { email, firstName, lastName }: SubscribeRequest = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const mailchimpData = {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        ...(firstName && { FNAME: firstName }),
        ...(lastName && { LNAME: lastName }),
      },
    };

    const mailchimpUrl = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;

    const response = await fetch(mailchimpUrl, {
      method: "POST",
      headers: {
        "Authorization": `Basic ${btoa(`anystring:${MAILCHIMP_API_KEY}`)}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mailchimpData),
    });

    const responseData = await response.json();

    if (response.status === 400 && responseData.title === "Member Exists") {
      return new Response(
        JSON.stringify({
          success: true,
          message: "Already subscribed",
          alreadySubscribed: true
        }),
        {
          status: 200,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    if (!response.ok) {
      console.error("Mailchimp error:", responseData);
      throw new Error(responseData.detail || "Failed to subscribe");
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Successfully subscribed"
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    return new Response(
      JSON.stringify({
        error: error.message || "Failed to subscribe to newsletter"
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
