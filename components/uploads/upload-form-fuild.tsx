import React, { useActionState, useState } from 'react'
import Upload from "@/components/uploads/upload-imagekit";
import { uploadVideoAction } from '@/actions/upload';

export default function UploadFormFuild (){
    const [videoUrl, setVideoUrl] = useState<string>("");
    const [thumbnailUrl, setThumbnailUrl] = useState<string>("");
    const [formState, action , isPending] = useActionState(uploadVideoAction, {errors: {}});

    const onSubmitAction = (formData: FormData) => {
        // Validate that URLs are set before submitting
        if (!videoUrl) {
            formState.errors.videoUrl = ["Video URL is required"];
            return;
        }
        
        formData.append("videoUrl", videoUrl);
        formData.append("thumbnailUrl", thumbnailUrl);
        return action(formData);
    }

    return (
        <div className='max-w-4xl mx-auto p-4'>
            <h1 className='text-3xl font-bold mb-6'>Add New movie</h1>

            {/* Show form-level errors */}
            {formState.errors.formErrors && (
                <div className="alert alert-error mb-4">
                    <ul>
                        {formState.errors.formErrors.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}

            <form className='form w-full' action={onSubmitAction}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-lg w-full border p-4">
                    <legend className="fieldset-legend">Upload Movie</legend>

                    <label htmlFor='title' className="label">Title</label>
                    <input type="text" placeholder="Type here" className="input" name='title' id='title'/>
                    {formState.errors.title && (
                        <p className="text-red-500 text-sm mt-1">{formState.errors.title}</p>
                    )}
                    
                    <label htmlFor='description' className="label">Description</label>
                    <input type="text" placeholder="Type here" className="input" name='description' id='description'/>
                    {formState.errors.description && (
                        <p className="text-red-500 text-sm mt-1">{formState.errors.description}</p>
                    )}

                    <label htmlFor='category' className="label">Category</label>
                    <select defaultValue="Select Category" className="select" name='category' id='category'>
                        <option disabled={true}>Select Category</option>
                        <option value="action">Action</option>
                        <option value="comedy">Comedy</option>
                        <option value="drama">Drama</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-Fi</option>
                    </select>
                    {formState.errors.category && (
                        <p className="text-red-500 text-sm mt-1">{formState.errors.category}</p>
                    )}

                    <div className="divider"></div>

                    <label htmlFor='thumbnail' className="label">Thumbnail</label>
                    <Upload setThumbnailUrl={setThumbnailUrl} id='thumbnail'/>
                    {formState.errors.thumbnailUrl && (
                        <p className="text-red-500 text-sm mt-1">{formState.errors.thumbnailUrl}</p>
                    )}
                    <div className="divider"></div>

                    <label htmlFor='video' className="label">Video</label>
                    <Upload setVideoUrl={setVideoUrl} id='video'/>
                    {formState.errors.videoUrl && (
                        <p className="text-red-500 text-sm mt-1">{formState.errors.videoUrl}</p>
                    )}

                    <button type='submit' className="btn btn-primary mt-4" disabled={isPending}>
                        { isPending ? <span className="loading loading-infinity loading-xl"></span> : "Save"}
                    </button>
                </fieldset>
            </form>
        </div>  
    )
}