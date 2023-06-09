PGDMP     *                    {           qap_3-fullstack-db    15.1    15.1                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    17292    qap_3-fullstack-db    DATABASE     v   CREATE DATABASE "qap_3-fullstack-db" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';
 $   DROP DATABASE "qap_3-fullstack-db";
                postgres    false            �            1259    17340    movies    TABLE     g  CREATE TABLE public.movies (
    movie_id integer NOT NULL,
    title character varying(250) NOT NULL,
    description text,
    release_year character varying(250) NOT NULL,
    rating character varying(250) NOT NULL,
    genre character varying(250) NOT NULL,
    main_actors character varying(250) NOT NULL,
    director character varying(250) NOT NULL
);
    DROP TABLE public.movies;
       public         heap    postgres    false            �            1259    17339    movies_movie_id_seq    SEQUENCE     �   CREATE SEQUENCE public.movies_movie_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.movies_movie_id_seq;
       public          postgres    false    215                       0    0    movies_movie_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.movies_movie_id_seq OWNED BY public.movies.movie_id;
          public          postgres    false    214            o           2604    17343    movies movie_id    DEFAULT     r   ALTER TABLE ONLY public.movies ALTER COLUMN movie_id SET DEFAULT nextval('public.movies_movie_id_seq'::regclass);
 >   ALTER TABLE public.movies ALTER COLUMN movie_id DROP DEFAULT;
       public          postgres    false    214    215    215                      0    17340    movies 
   TABLE DATA           r   COPY public.movies (movie_id, title, description, release_year, rating, genre, main_actors, director) FROM stdin;
    public          postgres    false    215   �       	           0    0    movies_movie_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.movies_movie_id_seq', 7, true);
          public          postgres    false    214            q           2606    17347    movies movies_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (movie_id);
 <   ALTER TABLE ONLY public.movies DROP CONSTRAINT movies_pkey;
       public            postgres    false    215               �  x�}TKs�D>˿�o\�l��{Ll��E�Cm�ť%����i�3���7r셋Kʹ��O���U�i(^:i����sÒz<���8�T��z�;�Ԩ�z��:����6tA�K��e~�J����<��Yc��m�]h��Ul9�`
b{#����KM�e)O��O����b�a|X�\<h��x�>�܏�����Ũ��[��ҍ�3���X	}q޻X�:JH��8?����^BqC&�Y��$�f/�����R7�=�� U�����&�^2[1Ǟv��U�8@<�j�df��(Q�����t�Aw3�$6}�i��uMO.�%m�Ztg"3������顠5�]kCՉ-.���������#�8S--�(�n�Z���>��\ ���.��0��5e?k���w=&�f���y��G +����0�+���ok��S#R��_��]O�'��l��G��V+�݊s����'���UgA@������m�n�vp��vq�|}�Y�Ϯ.��.g��{���ѣ��WD��1�_���5.�Y�>�o�$�fiN-��qȏ�v�|�2߱�޿�i>���k���l�ǫo��[��~�q\U]f=�{�����4d���>ܟ����:JX\�T��H?�9ڏsi���+�t48� `�*k�	��1H��A�0�<)׀�	����|H�LV*�k��-��7 ċ�?IG��3�ՀeT�˖ٔ?#~��
U���^ri�U�LKzA��n&x�� �׹�|,�?�+z�m���h#�B���1�&ņ-M����&�L�2o����_�e�0��u��E)���T���P���jp�k��(l5�4����o4��;i�;ύ�:FN�N_��ש.����R�\\�P�HL�����t�X�s5�     