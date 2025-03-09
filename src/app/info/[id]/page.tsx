"use client";

import React, { useEffect, useState } from "react";
import { dataList } from "@/data/data";
import Image from "next/image";
import { useParams } from "next/navigation";
import "@/styles/page.css"; 
import { useRouter } from "next/navigation";

// Define a type for the data
type FishData = {
  id: string;
  name: string;
  src: string;
  description: string;
  survivalStatus: string;
  fishingSeason: string;
  legalConsiderations: string;
  edibility: string;
  toxicity: string;
};

export default function Page() {
  const params = useParams();
  const [data, setData] = useState<FishData | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof params?.id === "string") {
      const foundData = dataList.find(item => item.id === params.id);
      setData(foundData || null);
    }
  }, [params]);

  if (!data) return <p className="page-container">Data not found.</p>;

  return (
    <div className="page-container">
      <button className="back-button" onClick={() => router.push("/")}>Back to Home</button>
      <Image src={data.src} alt="fish" height={400} width={400} className="page-image" />
      <h1 className="page-title">Name: {data.name}</h1>
      <p><strong>Description:</strong> {data.description}</p>
      <p><strong>Survival Status:</strong> {data.survivalStatus}</p>
      <p><strong>Fishing Season:</strong> {data.fishingSeason}</p>
      <p><strong>Legal Considerations:</strong> {data.legalConsiderations}</p>
      <p><strong>Edibility:</strong> {data.edibility}</p>
      <p><strong>Toxicity:</strong> {data.toxicity}</p>

      <div className="links">
        <h2>Related Links</h2>
        <ul>
          <li>
            <a
              href="https://www.eregulations.com/assets/docs/resources/WA/24WAFW_LR8.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Current Fishing and Hunting Regulations and Guidelines
            </a>
          </li>
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=gov.wa.dfw.fishwashington&pli=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Store - Fishing Regulations Lookup App with Tide Information
            </a>
          </li>
          <li>
            <a
              href="https://fishhunt.dfw.wa.gov/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fisheries Login Website - Purchase Fishing Licenses
            </a>
          </li>
          <li>
            <a
              href="https://wdfw.wa.gov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Washington State Department of Fish and Wildlife Official Website
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}