export class HighScores {
    constructor(scores) {
        this.score = scores
        this.ordered = [...this.score]
        this.ordered.sort((a,b) => a - b)
        this.ordered.reverse()
    }

    get scores() {
        return this.score
    }
  
    get latest() {
        return this.ordered[2]
    }
  
    get personalBest() {
       return this.ordered[0]
    }
  
    get personalTopThree() {
       return [this.ordered[0], this.ordered[1], this.ordered[2]]
    }
}
  
