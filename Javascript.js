var images =["diwali.jpg","dad.jpg","mom.jpg","armaan.jpg","muskan.jpg"];
var names =["My family","anil bhagwani","sonia bhagwani","armaan","muskan"]

var i = 0;
function update()
{
    i++;
    var family=5;
    if(i >= family)
    {
        i = 0;
    }
    var newimg = images[i];
    var newname = names[i];

    document.getElementById("img_tag").src = newimg;
document.getElementById("name").innerHTML = newname;
}
