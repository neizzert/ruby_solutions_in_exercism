
export function Size(width=80, height=60){
    this.width = width
    this.height = height
}

Size.prototype.resize = function (newWidth, newHeight) {
    this.width = newWidth
    this.height = newHeight
}


export function Position(x=0, y=0){
    this.x = x
    this.y = y
}

Position.prototype.move = function (newX, newY) {
    this.x = newX
    this.y = newY
}


export class ProgramWindow {
    constructor (s) {
        this.screenSize  = s || new Size (800, 600)
        this.size = new  Size()
        this.position = new  Position()
    } 
   
    resize (obj) {
        if (obj.width <= 0 ) {
          if (obj.height <= 0 ){
            this.size.width =  1
            this.size.height = 1
            return 
          }
        }
       
        else if (obj.height >  this.screenSize.height || obj.width > this.screenSize.width){
            this.size.width = obj.width - this.position.x  - 200      
            this.size.height = obj.height - this.position.y  - 400
            return 
        }
        this.size.width = obj.width
        this.size.height = obj.height
        return 
    }

    move (po){
        if (po.x < 0 || po.y < 0){
            this.position.x = 0
            this.position.y = 0
            return
        }
        
        if (po.x + this.size.width  > this.screenSize.width){
            this.position.x = po.x  - 50
            this.position.y = this.position.x - this.size.width - this.size.height
            return
        }

        this.position.x = po.x
        this.position.y = po.y
        return 
    }
    

}


export function changeWindow(object){
    const newSize = new Size(400, 300)
    const newPosition = new Position(100,  150)
    object.resize(newSize)
    object.move(newPosition)
    return object
}



 