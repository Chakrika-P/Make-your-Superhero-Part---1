var canvas=new fabric.Canvas("myCanvas");

player_x=10;
player_y=10;

part_img_width=30;
part_img_height=30;

var player_object="";
var part_img_object="";

function player_update(){
    fabric.Img.fromURL("player.png", function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);
    });
}

function new_img(get_Img){
fabric.Img.fromURL(get_Img, function(Img){
    part_img_object=Img;

    part_img_object.scaleTowidth(part_img_width);
    part_img_width.scaleToHeight(part_img_height);
    part_img_height.set({
        top:part_img_y,
        left:part_img_x
    });
    canvas.add(part_img_object);
});
}