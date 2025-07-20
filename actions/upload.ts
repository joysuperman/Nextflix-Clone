"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { prisma } from "@/app/prisma";

const uploadSchema = z.object({
	title: z.string().min(1, "Title is required"),
	description: z.string().min(1, "Description is required"),
	category: z.string().min(1, "Category is required"),
	videoUrl: z.string().url("Invalid video URL"),
	thumbnailUrl: z.string().optional(),
});

type UploadFromState = {
	errors: {
		title?: string[];
		description?: string[];
		category?: string[];
		videoUrl?: string[];
		thumbnailUrl?: string[];
		formErrors?: string[];
	};
};

export const uploadVideoAction = async (
	prevState: UploadFromState,
	formData: FormData
): Promise<UploadFromState> => {
	try {
		const result = uploadSchema.safeParse(
			Object.fromEntries(formData.entries())
		);
		
		if (!result.success) {
			return {
				errors: result.error.flatten().fieldErrors,
			};
		}

		const { title, description, category, videoUrl, thumbnailUrl } =
			result.data;
			
		await prisma.movie.create({
			data: {
				title,
				description,
				category,
				videoUrl,
				thumbnailUrl: thumbnailUrl || null,
			},
		});

		revalidatePath("/");
		redirect("/");
	} catch (error) {
		console.error("Upload error:", error);
		
		if (error instanceof Error) {
			return {
				errors: {
					formErrors: [error.message],
				},
			};
		} else {
			return {
				errors: {
					formErrors: ["An unexpected error occurred."],
				},
			};
		}
	}
};
