import BestSellersSection from "@/container/BestSellersSection";
import CustomerReviews from "@/container/CustomerReviews";
import FeatureHighlights from "@/container/FeatureHighlihts";
import MainText from "@/container/MainText";




export default async function Home() {
  const res = await fetch('http://localhost:3000/products.json')
  const products = await res.json();
  
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
