r=readline
var [,LX,LY,TX,TY]=/(\d+) (\d+) (\d+) (\d+)/.exec(r());
while (true) {
t=+r();x='';y='';
if(+TX>+LX){x='W';TX--;}
if(+TX<+LX){x='E';TX++;}
if(+TY>+LY){y='N';TY--;}
if(+TY<+LY){y='S';TY++;}
print(y+x);
}