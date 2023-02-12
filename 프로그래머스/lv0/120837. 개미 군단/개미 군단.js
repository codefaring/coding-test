function solution(hp) {
    const ant5 = Math.floor(hp / 5);
    const ant3 = Math.floor((hp - ant5 * 5) / 3);
    const ant1 = hp - ant5 * 5 - ant3 * 3;
    return ant5 + ant3 + ant1;
}