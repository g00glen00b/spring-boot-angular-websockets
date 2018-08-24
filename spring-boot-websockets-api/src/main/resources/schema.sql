create table author (
  id        integer identity primary key,
  username  varchar(64) unique not null,
  bio       varchar(1024) not null);

create table post (
  id        integer identity primary key,
  title     varchar(128) not null,
  content   varchar(1024) not null,
  posted_at timestamp not null,
  author_id integer not null);

create table comment (
  id        integer identity primary key,
  content   varchar(2014) not null,
  posted_at timestamp not null,
  post_id   integer not null,
  author_id integer not null);

alter table post add foreign key (author_id) references author(id);
alter table comment add foreign key (author_id) references author(id);
alter table comment add foreign key (post_id) references post(id);