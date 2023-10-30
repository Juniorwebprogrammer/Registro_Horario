use registrohorario;

insert into administrador (emailAdministrador, contraseñaAdministrador) values ("turegistrohorario@administrador.com", hex(aes_encrypt("turegistrohorarioAdministrador", "admin")));
