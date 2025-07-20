// File: app/api/upload-auth/route.ts
import { getUploadAuthParams } from "@imagekit/next/server";

export async function GET() {
	try {
		// Check if required environment variables are set
		const privateKey = process.env.PRIVATE_KEY;
		const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY;
		
		if (!privateKey || !publicKey) {
			return Response.json(
				{ error: "ImageKit configuration is missing" },
				{ status: 500 }
			);
		}

		const { token, expire, signature } = getUploadAuthParams({
			privateKey: privateKey,
			publicKey: publicKey,
			// expire: 30 * 60, // Optional, controls the expiry time of the token in seconds, maximum 1 hour in the future
			// token: "random-token", // Optional, a unique token for request
		});

		return Response.json({
			token,
			expire,
			signature,
			publicKey: publicKey,
		});
	} catch (error) {
		console.error("Upload auth error:", error);
		return Response.json(
			{ error: "Failed to generate upload credentials" },
			{ status: 500 }
		);
	}
}
