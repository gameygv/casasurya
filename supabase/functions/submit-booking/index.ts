import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface BookingRequest {
  nombre: string;
  email: string;
  telefono: string;
  servicio?: string;
  evento?: string;
  asistentes?: string;
  mensaje?: string;
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

    const bookingData: BookingRequest = await req.json();

    if (!bookingData.nombre || !bookingData.email || !bookingData.telefono) {
      return new Response(
        JSON.stringify({ error: "Required fields are missing" }),
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
      .from("bookings")
      .insert({
        nombre: bookingData.nombre,
        email: bookingData.email,
        telefono: bookingData.telefono,
        servicio: bookingData.servicio || null,
        evento: bookingData.evento || null,
        asistentes: bookingData.asistentes ? parseInt(bookingData.asistentes) : 1,
        mensaje: bookingData.mensaje || null,
      })
      .select()
      .single();

    if (error) {
      console.error("Error saving booking:", error);
      throw new Error("Failed to save booking");
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Booking saved successfully",
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
    console.error("Error processing booking:", error);
    return new Response(
      JSON.stringify({
        error: error.message || "Failed to process booking",
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
