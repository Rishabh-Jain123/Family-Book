var images = 
["https://clipground.com/images/cartoon-dad-clipart-1.jpg", 
"https://th.bing.com/th/id/R.a3a1c3dd699bc97f2c1a68124483fb87?rik=kuUyJ5z1Q2pLIQ&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2face%2fX4A%2faceX4A9gi.png&ehk=9aWioLTRqcwE4lMLF6Nn7D9iIax3Jz4kieCzgMTgAsg%3d&risl=&pid=ImgRaw&r=0", 
"https://th.bing.com/th/id/R.4c579d2ae06b889496a4b6a7119eee0f?rik=j0feiokMTz%2bgyw&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fMiL%2fx9b%2fMiLx9bAia.jpeg&ehk=yaIv49L%2blkCsRAtT3cGDt4XBSpasC45tV7cK1qV40EM%3d&risl=&pid=ImgRaw&r=0",
"https://cdn.imgbin.com/16/11/19/imgbin-mother-cartoon-mother-dNf0S7Q3HLj2wSEqP6z8pHgFY.jpg"];


var names =
["Navin Jain","Shreya Jain", "Me (Rishabh Jain)", "Puja Jain"];

var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").src = updatedName;
}

