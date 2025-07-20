import React from 'react'
import Upload from "@/components/uploads/upload-imagekit";

export default function UploadFormFuild (){
  const isPending = true;
  return (
    <div className='max-w-4xl mx-auto p-4'>
        <h1 className='text-3xl font-bold mb-6'>Add New movie</h1>

        <form action="">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Upload Movie</legend>

                <label htmlFor='movie-name' className="label">Title</label>
                <input type="text" placeholder="Type here" className="input" id='movie-name'/>
                
                <label htmlFor='description' className="label">Description</label>
                <input type="text" placeholder="Type here" className="input" id='description'/>

                <label htmlFor='category' className="label">Category</label>
                <select defaultValue="Select Category" className="select" id='category'>
                    <option disabled={true}>Select Category</option>
                    <option value="action">Action</option>
                    <option value="comedy">Comedy</option>
                    <option value="drama">Drama</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-Fi</option>
                </select>

                <div className="divider"></div>

                <label htmlFor='thumbnail' className="label">Thumbnail</label>
                <Upload />

                <button className="btn btn-neutral mt-4" disabled={isPending}>{ isPending ? "Pending...." : "Save"}</button>
            </fieldset>
        </form>
    </div>  
  )
}