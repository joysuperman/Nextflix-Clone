"use client";
import React, { useState } from "react";
import { ImageKitProvider, IKUpload } from "imagekitio-next";
import { IKUploadResponse } from "imagekitio-next/dist/types/components/IKUpload/props";

const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY;
const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;

const authenticator = async () => {
    try {
        // Perform the request to the upload authentication endpoint.
        const response = await fetch("/api/upload-auth");
        if (!response.ok) {
            // If the server response is not successful, extract the error text for debugging.
            const errorText = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }

        // Parse and destructure the response JSON for upload credentials.
        const data = await response.json();
        const { signature, expire, token, publicKey } = data;
        return { signature, expire, token, publicKey };
    } catch (error) {
        // Log the original error for debugging before rethrowing a new error.
        console.error("Authentication error:", error);
        throw new Error("Authentication request failed");
    }
};

type IKUploadProps = {
    setVideoUrl?: (videoUrl: string) => void;
    setThumbnailUrl?: (thumbnailUrl: string) => void;
};

export default function Upload({ setVideoUrl, setThumbnailUrl }: IKUploadProps) {
    const [uploadProgress, setUploadProgress] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    const onError = (err: any) => {
        console.log("Error", err);
        setError(err.message);
        setUploadProgress(null);
    };

    const onSuccess = (res: IKUploadResponse) => {  
        if (setVideoUrl && res.url) {
        setVideoUrl(res.url);
        }
        if(setThumbnailUrl && res.thumbnailUrl) {
        setThumbnailUrl(res.url);
        }
        setUploadProgress(100);
        setError(null);
    };

    const onUploadProgress = (evt: ProgressEvent<XMLHttpRequestEventTarget>) => {
        if (evt.lengthComputable) {
        const progress = Math.round(evt.loaded / evt.total / 100);
        setUploadProgress(progress);
        }
    };

    const onUploadStart = () => {
        setUploadProgress(0);
        setError(null);
    };

    return (
        <ImageKitProvider
        publicKey={publicKey}
        urlEndpoint={urlEndpoint}
        authenticator={authenticator}
        >
        <IKUpload
            useUniqueFileName={true}
            validateFile={(file) => file.size < 20 * 1024 * 1024}
            folder={"/netflix-uploads"}
            onError={onError}
            onSuccess={onSuccess}
            onUploadProgress={onUploadProgress}
            onUploadStart={onUploadStart}
            className="file-input file-input-ghost"
            id="thumbnail"
        />

        {/* Show progress bar only when upload is in progress  */}
        {uploadProgress !== null && (
            <div className="mt-4">
                <progress className="progress w-full" value={uploadProgress} max="100"></progress>
            </div>
        )}

        {/* Show error message if upload fails  */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </ImageKitProvider>
    );
}