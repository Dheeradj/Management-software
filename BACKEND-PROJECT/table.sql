create table user(
    id int primary key AUTO_INCREMENT,
    naam varchar(250),
    telefoonnummer varchar(20),
    email varchar(50),
    password varchar(250),
    status varchar(20),
    role varchar(20),
    UNIQUE (email)
);

insert into user (naam, telefoonnummer, email, password,status,role) values ('admin', '9610749', 'admin@gmail.com', 'admin', 'true', 'admin');

create table leverancier(
    id int primary key AUTO_INCREMENT,
    bedrijfsnaam varchar(250),
    adress varchar(250),
    district varchar(250),
    directeur varchar(250),
    telefoonnummer varchar(250),
    website varchar(250),
    status varchar(20)    
);

create table klant(
    id int primary key AUTO_INCREMENT,
    voornaam varchar(250),
    achternaam varchar(250),
    geslacht varchar(20),
    adressennummer varchar(250),
    district varchar(250),
    telefoonnummer varchar(250),
    email varchar(250),
    status varchar(20)
);