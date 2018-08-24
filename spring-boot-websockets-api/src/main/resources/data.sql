insert into author (id, username, bio) values
  (1, 'g00glen00b', 'Administrator of this website'),
  (2, 'john.doe', 'A person who prefers to stay anonymous');
insert into post (id, title, content, author_id, posted_at) values
  (1, 'Welcome to this community', 'This is a small introduction text to the wonderful community of postit. Just add new posts by opening the link at the left navigation. To view a post, you can click its title and post comments to it.', 1, '2018-08-01 00:00:00'),
  (2, 'I hate this', 'I don''t like this community and I''m going back to Reddit. Cya later!', 2, '2018-08-03 00:00:00');
insert into comment (id, content, author_id, post_id, posted_at) values
  (1, 'This community looks interesting, it might be even better than Reddit!', 2, 1, '2018-08-01 01:00:00'),
  (2, 'I agree with you @john.doe', 1, 1, '2018-08-01 02:00:00'),
  (3, 'Sorry to see you go!', 1, 2, '2018-08-04 00:00:00');