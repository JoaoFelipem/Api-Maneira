create database api_maneira_db;

use api_maneira_db;

create table usuario(
id_usu int auto_increment primary key 
);

create table despesas(
id_desp int auto_increment primary key,
descricao varchar(200) not null,
data_desp date not null,
data_efetivacao datetime not null,
valor decimal(12,2) not null,
valor_pago decimal (12,2) not null,
pago boolean not null
);

insert into despesas (id_desp, descricao, data_desp, data_efetivacao, valor, valor_pago, pago) values (1, 'Agimba', '2023-02-10', '2022-09-12 23:47:13', 1604.21, 3381.44, false);
insert into despesas (id_desp, descricao, data_desp, data_efetivacao, valor, valor_pago, pago) values (2, 'Ozu', '2022-12-15', '2022-07-14 19:32:21', 77.52, 1549.38, true);
insert into despesas (id_desp, descricao, data_desp, data_efetivacao, valor, valor_pago, pago) values (3, 'Edgeclub', '2023-01-01', '2022-06-25 09:44:49', 774.68, 4206.05, false);
insert into despesas (id_desp, descricao, data_desp, data_efetivacao, valor, valor_pago, pago) values (4, 'Topiczoom', '2023-01-28', '2022-05-13 12:43:42', 1067.88, 314.16, true);
insert into despesas (id_desp, descricao, data_desp, data_efetivacao, valor, valor_pago, pago) values (5, 'Skidoo', '2023-04-15', '2022-09-22 05:21:51', 2001.19, 1451.59, true);
insert into despesas (id_desp, descricao, data_desp, data_efetivacao, valor, valor_pago, pago) values (6, 'Katz', '2022-06-10', '2023-01-07 17:20:18', 4425.17, 4168.35, false);
insert into despesas (id_desp, descricao, data_desp, data_efetivacao, valor, valor_pago, pago) values (7, 'Feedfire', '2022-04-21', '2022-11-03 23:53:39', 2272.49, 4073.2, true);
insert into despesas (id_desp, descricao, data_desp, data_efetivacao, valor, valor_pago, pago) values (8, 'Buzzshare', '2022-04-26', '2022-12-02 08:43:29', 1367.33, 2401.83, false);
insert into despesas (id_desp, descricao, data_desp, data_efetivacao, valor, valor_pago, pago) values (9, 'Skidoo', '2023-03-03', '2022-09-22 01:00:08', 3377.5, 3795.71, 0);
insert into despesas (id_desp, descricao, data_desp, data_efetivacao, valor, valor_pago, pago) values (10, 'Meembee', '2022-01-25', '2023-01-12 18:20:18', 1457.43, 1746.97, 1);

select * from despesas; 