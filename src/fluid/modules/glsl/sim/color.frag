precision highp float;
uniform sampler2D velocity;
varying vec2 uv;

void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float len = length(vel);
    //vel = vel * 0.5 + 0.5;
    
    vec3 color = vec3(vel.x, vel.y, 1.0);
    color = mix(vec3(1.0), color, len);

    vec3 bgColor = vec3(244.0,244.0,244.0)/255.0; //light-gray
    vec3 lightBrownColor = vec3(235.0,222.0,212.0)/255.0; //light-brown
    vec3 darkBrownColor = vec3(196, 127, 56)/255.0; //dark-brown
    vec3 orangeFromRocket = vec3(218.0, 81.0, 58.0)/255.0;
    vec3 pistaFromRocket = vec3(146.0, 184.0, 176.0)/255.0;
    vec3 pista = vec3(0.0, 255.0, 201.0)/255.0;
    vec3 darkBrownFromPlanet = vec3(132.0, 88.0, 80.0)/255.0;
    vec3 yellowFromPlanet = vec3(209.0, 138.0, 67.0)/255.0;
    vec3 brightYellow = vec3(255, 128.0, 0.0)/255.0;
    vec3 red = vec3(1.0,0.0,0.0);
    vec3 green = vec3(0.0,1.0,0.0);
    vec3 blue = vec3(0.0,0.0,1.0);
    vec3 skyBlue = vec3(3.0,169.0,244.0)/255.0;

    vec3 targetColor = bgColor;
    vec3 modColor = darkBrownColor;
    if(len!=0.0){
        vec2 nVel = normalize(vel);
        float targetR = bgColor.r*0.9+0.1*mix(bgColor.r,modColor.r, (nVel.y+1.0)/2.0);
        float targetG = bgColor.g*0.9+0.1*mix(bgColor.g,modColor.g, (nVel.x+1.0)/2.0);
        float targetB = bgColor.b*0.8+0.1*mix(bgColor.b,modColor.b, (nVel.x+1.0)/2.0)+0.1*mix(bgColor.b,modColor.b, (nVel.y+1.0)/2.0);    
        targetColor = (vec3(targetR, targetG, targetB));
    }
    color = mix(bgColor, targetColor, len);

    gl_FragColor = vec4(color,  1.0);
}
