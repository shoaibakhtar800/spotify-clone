import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistData?.artists[artistId]?.attribute;


  { console.log("DetailsHeader:",songData) }
  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28 rounded-2xl" />

      <div className="absolute inset-0 flex items-center">
        <img src={artistId ? artist?.artwork?.url.replace('{w}', '500').replace('{h}', '500') : songData?.result?.images?.coverart} alt="" className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black" />

        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">{artistId ? artist?.name : songData?.result?.title}</p>
          {!artistId && (
              <p className="text-base text-gray-400 mt-2">{songData?.subtitle}</p>
          )}

          <p className="text-base text-gray-400 mt-2">{artistId ? artist?.genreNames[0] : songData?.result?.genres?.primary}</p>
        </div>
      </div>

      <div className="w-full sm:h-44 h-24" />
    </div>
  );
}

export default DetailsHeader;
