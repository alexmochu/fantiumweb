import { icons } from './constants'

interface Collection {
  collection_id: number;
  number_collection_remaining: number;
  price: number;
  status: boolean;
  perks: string[];
  percentage_ownership: string;
}
interface CollectionCardProps {
  image: string;
  collection: Collection;
  variable: string;
}

export function CollectionCard({ image, collection, variable } : CollectionCardProps) {
  const iconsImages = Object.values(icons)
  let i = 0
  return (
    <div>
      <div className="flex min-h-[428px] w-[320px] flex-col bg-[#191919]">
        <img className="p-2" alt="collectio_image" src={image}/>
        <h2 className="mt-8 ml-7 text-xs text-white font-normal">{variable}</h2>
        <div className="mb-4 ml-7 flex justify-between mr-7 items-end font-black">
          <div className="font-normal text-3xl text-white">{collection.percentage_ownership}%</div>
          <div className="text-[#535353] text-sm font-normal">Ownership / Token</div>
        </div>
        <hr className="border border-[#2a2b2b]"/>
        <p className="mb-2 mt-5 ml-7 text-xs text-[#BDFF1E]">$ {collection.price.toLocaleString()}</p>
        <ul className="mb-7 min-h-[70px] ml-7 mr-7 flex flex-col gap-y-2 text-white">
          {collection.perks.map(perk => (
            <li className="flex text-sm center-items">
              <img className="mr-4 h-4" alt="icon" src={iconsImages[i++]}/>
              {perk}
            </li>
           ))}
        </ul>
        <button
          className={`rounded-full bg-[#BDFF1E] mb-7 ml-7 mr-7 h-10 text-lg font-medium text-black hover:bg-white ${
            collection.status ? '' : 'cursor-not-allowed opacity-50'
          }`}
          disabled={!collection.status} >
          BUY ON OPENSEA
        </button>
      </div>
      <p className="mt-3 text-center text-[#535353]">{collection.number_collection_remaining
} Tokens</p>
    </div>
  );
}