
export function removeDuplicates(playlist){
    return  Array.from(new Set (playlist))
}

export function hasTrack(playlist, value){
    return  new Set(playlist).has(value)
}

export function addTrack(playlist, value){
    return  Array.from(new Set(playlist).add(value) )
}

export function deleteTrack (list, value){
     const colle = new Set(list)
    colle.delete(value)
    return Array.from(colle)
}

export function listArtists(playlist){
    const s = new Set()
    for (const element of playlist) {
        const par = element.split('- ')    
        s.add(par[1])   
    }
    return  Array.from(s)
}
