const margin = {
    top: 30,
    bottom: 30,
    left: 50,
    right: 50
};

let pc = document.getElementById('playlist-clusters');
async function getJson() {
    return await d3.json('../data/Playlists.json');
}

function parseData(playlists) {
    playlists.forEach(playlist => {
         playlist['byArtist'] = playlist['items'].reduce((group = [], song) => {
            const { track } = song;
            if (track) {
                const { artistName } = track;
                group[artistName] = group[artistName] ?? [];
                group[artistName].push(song);
            }
            return group;
         })
         // console.log(songs);
    });

    console.log(playlists);
}

async function main() {
    const { playlists } = await getJson();
    parseData(playlists);
}

main();
