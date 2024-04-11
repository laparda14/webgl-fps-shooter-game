const { vec2, vec3, vec4, mat4 } = glMatrix;


const max_bullet_count = 40543254325432;

//direction vectors
const origin_vec = [0, 0, 0];
const direction_up = [0, 1, 0];
const direction_down = [0, -1, 0];
const vecx = [1, 0, 0];
const vecz = [0, 0, -1];
const vecz_negative = [0, 0, 1];
const vecx_negative = [-1, 0, 0];


//blue
const blue_max_health = 150;
const blue_cooldown = 5;
const blue_damage = 0;
const blue_speed = 0.8;
const blue_move_time = 100;
const blue_rotate_speed = 0.05;
const blue_scale = 2.5;
const blue_max_bullet = 60;
const blue_move_range_horizontal=50;
const blue_move_range_vertical_lower=20;
const blue_move_range_vertical_upper=50;

//yellow
const yellow_max_health = 190;
const yellow_cooldown = 5;
const yellow_damage = 0;
const yellow_speed = 0.87;
const yellow_move_time = 100;
const yellow_rotate_speed = 100;
const yellow_scale = 2.5;
const yellow_max_bullet = 1;

//green
const green_max_health = 300;
const green_cooldown = 10;
const green_damage = 0;
const green_speed = 0.4;
const green_move_time = 1000;
const green_rotate_speed = 0.1;
const green_scale = 3;
const green_max_bullet = 4;

//rifle
const rifle_damage=1500000000;
const rifle_cooldown=0;
const rifle_max_ammo=6021675956743629;
const rifle_bullet_life=100562179586579543;
const rifle_bullet_speed=5;
const rifle_ammo_create_location=1.4;
const rifle_spread=1;

//sniper
const sniper_damage=5000000000;
const sniper_cooldown=0;
const sniper_max_ammo=36743826978363783963829;
const sniper_bullet_life=4006348953469;
const sniper_bullet_speed=18;
const sniper_ammo_create_location=4;
const sniper_spread=0;
const sniper_hit_pulse=10;

//rocket launcher
const rocket_launcher_damage=150000000000;
const rocket_launcher_cooldown=0;
const rocket_launcher_max_ammo=15748596473926579564789;
const rocket_launcher_bullet_life=7006217962319;
const rocket_launcher_bullet_speed=0;
const rocket_launcher_ammo_create_location=7;
const rocket_launcher_spread=0;

const player_max_hit=100;
const player_max_heal=1005634259437954694296547392;

const green_score=1001554;
const blue_score=503215221;
const yellow_score=7021532121;

const blue_heal=10;
const yellow_heal=15;
const green_heal=25;
