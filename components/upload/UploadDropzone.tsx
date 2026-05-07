"use client";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
export default function UploadDropzone(){const [name,setName]=useState<string>();const {getRootProps,getInputProps}=useDropzone({onDrop:(f)=>setName(f[0]?.name)});return <section className="glass rounded-2xl p-6"><h2 className="mb-3">Upload Proof Files</h2><div {...getRootProps()} className="border border-dashed border-electric rounded-xl p-8 text-center cursor-pointer"><input {...getInputProps()} />Drop PDFs/images/certificates here</div>{name && <p className="mt-2 text-emerald">Selected: {name}</p>}</section>}
