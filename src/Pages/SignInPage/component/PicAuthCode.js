import React, { Component } from 'react'

export default class PicAuthCode extends Component {

    static defaultProps={
        setCode:()=>""       //更新验证码的方法,返回验证码即可
    }

    state={
        contentWidth: 100,
        contentHeight: 35,
        codeLength:4,
        backgroundColorMin: 180,
        backgroundColorMax:240,
        fontSizeMin: 25,
        fontSizeMax: 30,
        colorMin: 50,
        colorMax: 160,
        lineColorMin:40,
        lineColorMax: 180,
        dotColorMin: 0,
        dotColorMax: 255,
        textStyle:{fontSize:'12px',color:'gray',marginLeft:'6px',cursor:'pointer',padding:'5px',userSelect:"none"}
    }

    drawPic=(code)=>{
        let canvas = this.canvas
        let ctx = canvas.getContext('2d')
        ctx.fillStyle = this.randomColor(this.state.backgroundColorMin, this.state.backgroundColorMax)
        ctx.strokeStyle = this.randomColor(this.state.backgroundColorMin, this.state.backgroundColorMax)
        ctx.fillRect(0, 0, this.state.contentWidth,this.state.contentHeight)
        ctx.strokeRect(0,0,this.state.contentWidth,this.state.contentHeight)
        for (let i = 0; i < code.length; i++) {
            this.drawText(ctx,code[i], i)
        }
        this.drawLine(ctx)
        this.drawDot(ctx)
    }
    randomNum=(min, max)=>{
        return Math.floor(Math.random() * (max - min) + min)
    }
    randomColor=(min, max)=>{
        let r = this.randomNum(min, max)
        let g = this.randomNum(min, max)
        let b = this.randomNum(min, max)
        return 'rgb(' + r + ',' + g + ',' + b + ')'
    }
    drawText=(ctx, txt, i)=>{
        ctx.fillStyle = this.randomColor(this.state.colorMin,this.state.colorMax)
        ctx.font = this.randomNum(this.state.fontSizeMin,this.state.fontSizeMax) + 'px SimHei'
        ctx.textBaseline = 'alphabetic'
        let x = (i + 1) * (this.state.contentWidth / (this.state.codeLength + 1))
        let y = this.randomNum(this.state.fontSizeMax, this.state.contentHeight - 12)
        let deg = this.randomNum(-45, 45)
        ctx.translate(x, y)
        ctx.rotate(deg * Math.PI / 180)
        ctx.fillText(txt, 0, 0)
        ctx.rotate(-deg * Math.PI / 180)
        ctx.translate(-x, -y)
    }
    drawLine=(ctx)=>{
        for (let i = 0; i < 8; i++) {
            ctx.strokeStyle = this.randomColor(this.state.lineColorMin,this.state.lineColorMax)
            ctx.beginPath()
            ctx.moveTo(this.randomNum(0, this.state.contentWidth), this.randomNum(0, this.state.contentHeight)) //设置起点x,y
            ctx.lineTo(this.randomNum(0,this.state.contentWidth), this.randomNum(0, this.state.contentHeight)) //绘制直线 x,y 一条当前位置到x,y点的直线
            ctx.stroke()
        }
    }
    drawDot=(ctx)=>{
        for (let i = 0; i < 100; i++) {
            ctx.fillStyle = this.randomColor(0, 255)
            ctx.beginPath()
            ctx.arc(this.randomNum(0, this.state.contentWidth), this.randomNum(0, this.state.contentHeight), 1, 0, 2 * Math.PI)
            ctx.fill()
        }
    }
    refresh=()=>{
        const words='AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'
        let code=''
        for(let i=0;i<this.state.codeLength;i++){
            code+=words[Math.floor( Math.random()*52)]
        }
        const fooCode=this.props.setCode()
        fooCode?this.drawPic(fooCode):this.drawPic(code)
    }
    componentDidMount(){
        this.refresh()
    }

    render() {
        return (
            <div>
                <canvas
                    ref={(el)=>{this.canvas=el}}
                    width={this.state.contentWidth}
                    height={this.state.contentHeight}
                    onClick={this.refresh}
                />
            </div>
        )
    }
}
