import BestSellersSection from "@/container/BestSellersSection";
import CustomerReviews from "@/container/CustomerReviews";
import FeatureHighlights from "@/container/FeatureHighlihts";
import MainText from "@/container/MainText";

import { promises as fs } from "fs";
import path from 'path';


export default async function Home() {
  const file = await fs.readFile(
          path.join(process.cwd(), "public", "products.json"),
          "utf-8"
      );

      const products = JSON.parse(file);
  
  return (
    <div className="p-3">
      <div className="flex flex-col justify-around items-center mt-8">
        <div>
          <MainText/>
        </div>
        <div>
          <BestSellersSection />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div><CustomerReviews/></div>
        <div><FeatureHighlights/></div>
      </div>
    </div>
    
  );
}
