import React from "react";

import { CollectionCard } from './collectionCard'
import { images, variables } from './constants'
interface Collection {
  collection_id: number;
  number_collection_remaining: number;
  price: number;
  status: boolean;
  perks: string[];
  percentage_ownership: string;
}

interface CollectionsProps {
  collections: Collection[];
}

const Fantium: React.FC<CollectionsProps> = ({ collections }) => {
  const imagesArray = Object.values(images);
  const varaiblesArray = Object.values(variables)
  return (
    <div className='flex flex-col min-h-screen items-center h-full bg-[#0f0e0e] p-4 m-0'>
      <div className='flex flex-col gap-8 pl-10 pt-10 pr-10 pb-5 mx-auto xl:flex-row'>
        {collections.map(collection => (
          <CollectionCard key={collection.collection_id} image={imagesArray[collection.collection_id-1]} variable={varaiblesArray[collection.collection_id-1]} collection={collection} />
        ))}
      </div>
      <div className="flex w-[320px] xl:w-[1104px] pr-0 xl:pr-10 pl-10 mb-10 justify-end">
        <div className="mt-0.5 mr-2 text-white">VALUATION METHOD</div>
        <div>
          <img alt="arrow-right" src="https://fantium-bucket.s3.amazonaws.com/arrow-narrow-left.svg"/>
        </div>
      </div>
    </div>
  );
}

export default Fantium;
