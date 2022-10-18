import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // ?title=<title>
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Daniel Derma | Posts";

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            letterSpacing: "-.02em",
            fontWeight: 700,
            background: "white",
          }}
        >
          <div
            style={{
              left: 42,
              top: 42,
              position: "absolute",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 144 144"
            >
              <path fill="#000" d="M0 0h144v144H0z" />
              <path
                fill="#fff"
                d="M37.741 103h-13.36l.089-6.9h13.27c4.57 0 8.38-.952 11.426-2.856 3.047-1.933 5.332-4.629 6.855-8.086 1.553-3.486 2.33-7.558 2.33-12.217v-3.91c0-3.663-.44-6.915-1.319-9.757-.879-2.87-2.168-5.288-3.867-7.25-1.7-1.993-3.78-3.502-6.24-4.527-2.432-1.025-5.23-1.538-8.394-1.538H24.118v-6.943h14.414c4.19 0 8.013.703 11.47 2.109 3.457 1.377 6.43 3.384 8.92 6.02 2.52 2.608 4.454 5.772 5.802 9.493 1.347 3.691 2.021 7.851 2.021 12.48v3.823c0 4.63-.674 8.804-2.021 12.525-1.348 3.691-3.296 6.84-5.845 9.448-2.52 2.608-5.566 4.614-9.14 6.021C46.192 102.312 42.193 103 37.74 103Zm-8.833-63.984V103h-8.481V39.016h8.481ZM96.804 103h-13.36l.088-6.9h13.272c4.57 0 8.379-.952 11.425-2.856 3.047-1.933 5.333-4.629 6.856-8.086 1.553-3.486 2.329-7.558 2.329-12.217v-3.91c0-3.663-.439-6.915-1.318-9.757-.879-2.87-2.168-5.288-3.867-7.25-1.7-1.993-3.78-3.502-6.241-4.527-2.431-1.025-5.229-1.538-8.393-1.538H83.18v-6.943h14.414c4.189 0 8.012.703 11.469 2.109 3.457 1.377 6.431 3.384 8.921 6.02 2.52 2.608 4.453 5.772 5.801 9.493 1.348 3.691 2.022 7.851 2.022 12.48v3.823c0 4.63-.674 8.804-2.022 12.525-1.348 3.691-3.296 6.84-5.845 9.448-2.519 2.608-5.566 4.614-9.14 6.021-3.545 1.377-7.544 2.065-11.997 2.065ZM87.97 39.016V103h-8.482V39.016h8.482Z"
              />
            </svg>

            <span
              style={{
                marginLeft: 8,
                fontSize: 20,
              }}
            >
              danielderma.com
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              padding: "20px 50px",
              margin: "0 42px",
              fontSize: 40,
              width: "auto",
              maxWidth: 550,
              textAlign: "center",
              backgroundColor: "black",
              color: "white",
              lineHeight: 1.4,
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 800,
        height: 400,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
