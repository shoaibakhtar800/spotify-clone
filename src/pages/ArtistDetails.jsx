import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
    // const { id: artistId } = useParams();
    // const { activeSong, isPlaying } = useSelector((state) => state.player);
    // // const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistName);


    // if (isFetchingArtistDetails) return <Loader title="Loading artist details" />;

    // if (error) return <Error />;

    // {console.log("songDetails:", artistData)}

    return (
        <div className="flex flex-col">
            {/* <DetailsHeader artistId="" artistData={artistData.result} /> */}

            {/* <RelatedSongs
                data={artistData?.result?.hits}
                artistId={artistName}
                isPlaying={isPlaying}
                activeSong={activeSong} 
            /> */}
        </div>
    );
}

export default ArtistDetails;
