import React from 'react';
import './Featured.sass';
import FeaturedSong from '../FeaturedSong/FeaturedSong';
import HeaderText from '../HeaderText/HeaderText';

import Container from 'react-bootstrap/Container';

//TODO: put data into JSON or API

const featureJson = {
    songs: [
        {
            "track": "Blank Space",
            "album": "1989",
            "image": "1",
            'lyrics': 'Got a long list of ex-lovers They\'ll tell you I\'m insane But I\'ve got a blank space, baby And I\'ll write your name',
            'songUrl': 'https://open.spotify.com/album/2QJmrSgbdM35R67eoGQo4j?highlight=spotify:track:1p80LdxRV74UKvL8gnD7ky',
            'musicVideoUrl': 'https://www.youtube.com/watch?v=e-ORhEE9VVg&ab_channel=TaylorSwiftVEVO'
        },
        {
            "track": "Cardigan",
            "album": "Folklore",
            'image': '2',
            'lyrics': 'But I knew you\'d linger like a tattoo kiss  I knew you\'d haunt all of my what-ifs The smell of smoke would hang around this long \'Cause I knew everything when I was young',
            'songUrl': 'https://open.spotify.com/album/2fenSS68JI1h4Fo296JfGr?highlight=spotify:track:4R2kfaDFhslZEMJqAFNpdd',
            'musicVideoUrl': 'https://www.youtube.com/watch?v=K-a8s8OLBSE&ab_channel=TaylorSwiftVEVO'
        },
        {
            "track": "I Knew You Were Trouble",
            "album": "Red",
            'image': '3',
            'lyrics': 'No apologies He\'ll never see you cry Pretends he doesn\'t know That he\'s the reason why',
            'songUrl': 'https://open.spotify.com/album/1KlU96Hw9nlvqpBPlSqcTV?highlight=spotify:track:0ciHz919LVKoH4zgxyMPZ9',
            'musicVideoUrl': 'https://www.youtube.com/watch?v=vNoKguSdy4Y&ab_channel=TaylorSwiftVEVO'
        }
    ]
}

const Featured = () => {

    return (
        <div className="featured-container">
            <Container>
                <HeaderText title="Featured" subtitle="Tracks that I vibe to" />
                {featureJson.songs.map((song, i) => 
                    <FeaturedSong 
                        key={i} 
                        track={song.track} 
                        album={song.album} 
                        image={song.image} 
                        lyrics={song.lyrics} 
                        songUrl={song.songUrl} 
                        musicVideoUrl={song.musicVideoUrl}
                    />
                )}
            </Container>
        </div>
    );
}

export default Featured;