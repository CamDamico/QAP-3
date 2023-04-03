CREATE TABLE public.Movies (
	movie_id SERIAL NOT NULL,
	title VARCHAR(250) NOT NULL,
	description TEXT,
	release_year VARCHAR(250) NOT NULL,
	rating VARCHAR(250) NOT NULL,
	genre VARCHAR(250) NOT NULL,
	main_actors VARCHAR(250) NOT NULL,
	director VARCHAR(250) NOT NULL,
	PRIMARY KEY (movie_id)
);

INSERT INTO public.Movies (title, description, release_year, rating, genre, main_actors, director) VALUES
('Pulp Fiction', 'This ultra-hip, multi-stand crime movies follows the stories of 2 hitmen, their boss and his wife, a struggling boxer, and a nervous pair of armed robbers.', '1994', 'R', 'Crime/Drama', 'John Travolta, Samuel L. Jacksson, Uma Thurman, Bruce Willis', 'Quentin Tarantino'),
('Seven', 'A retiring Detective is paired with a newly transfered Detective to tackle a serial killer case with elaborate and gruesome murders.', '1995', 'R', 'Mystery/Crime', 'Bradd Pitt, Morgan Freeman, Gwyneth Paltrow', ' David Fincher'),
('Catch Me If You Can', 'A brilliant teenage forger scams his way into working as a pilot, a doctor, and a lawyer all before his 18th birthday to steal millions of dollars.', '2003', 'PG-13', 'Drama/Crime', 'Leonardo DiCaprio, Tom Hanks, Christopher Walken', 'Steven Spielberg'),
('The Karate Kid', 'Daniel moves to California with his mother, but quickly finds himself the target of a group of bullies who study Karate at the Cobra Kai dojo.', '1984', 'PG-13', 'Drama/Action', 'Ralph Macchio, William Zabka, Pat Morita', 'John G. Avildsen'),
('Ocean''s Eleven', 'Less than 24 hours after being released from prison, Danny Ocean is already rolling out his next big plan, the most elaborate casino heist in history', '2001', 'PG-13', 'Crime/Comedy', 'George Clooney, Julia Roberts, Matt Damon, Brad Pitt', 'Steven Soderbergh'),
('Back To The Future', 'Marty Mcfly is thrown back into the 50s when an experiment by his eccentric scientist friend Doc Brown goes wrong.', '1985', 'PG-13', 'Sci-fi/Comedy', 'Michael J. Fox, Christopher Lloyd', 'Robert Zemeckis');

SELECT * FROM public.Movies;