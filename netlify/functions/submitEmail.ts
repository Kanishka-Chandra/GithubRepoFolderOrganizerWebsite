// netlify/functions/submitEmail.js

exports.handler = async function (event, context) {
  // Allow only POST requests.
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: "Method Not Allowed",
    };
  }

  try {
    // Parse the request body.
    const data = JSON.parse(event.body);
    const email = data.email;

    // Validate the email.
    if (!email) {
      return {
        statusCode: 400,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({
          result: "error",
          message: "Email not provided.",
        }),
      };
    }

    // *** Here you would integrate your storage logic ***
    // For example, write the email and a timestamp to a database,
    // log the email, or even call another service.
    // For demonstration, we simply log it:
    console.log("Email received:", email);

    // Respond with a success message.
    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ result: "success" }),
    };
  } catch (error) {
    console.error("Error processing submission:", error);
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ result: "error", message: error.message }),
    };
  }
};
