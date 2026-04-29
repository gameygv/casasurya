import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactRequest {
  nombre: string;
  email: string;
  telefono: string;
  asunto: string;
  mensaje: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Supabase configuration missing");
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const contactData: ContactRequest = await req.json();

    if (!contactData.nombre || !contactData.email || !contactData.telefono || !contactData.asunto || !contactData.mensaje) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const { data, error } = await supabase
      .from("contact_messages")
      .insert({
        nombre: contactData.nombre,
        email: contactData.email,
        telefono: contactData.telefono,
        asunto: contactData.asunto,
        mensaje: contactData.mensaje,
      })
      .select()
      .single();

    if (error) {
      console.error("Error saving contact message:", error);
      throw new Error("Failed to save contact message");
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Contact message saved successfully",
        data,
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
    console.error("Error processing contact message:", error);
    return new Response(
      JSON.stringify({
        error: error.message || "Failed to process contact message",
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
