import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertInCity1740080767073 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            
            INSERT INTO city("id", "name", "state_id") VALUES (1, 'Afonso Cláudio', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (2, 'Água Doce do Norte', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (3, 'Águia Branca', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (4, 'Alegre', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (5, 'Alfredo Chaves', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (6, 'Alto Rio Novo', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (7, 'Anchieta', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (8, 'Apiacá', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (9, 'Aracruz', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (10, 'Atilio Vivacqua', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (11, 'Baixo Guandu', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (12, 'Barra de São Francisco', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (13, 'Boa Esperança', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (14, 'Bom Jesus do Norte', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (15, 'Brejetuba', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (16, 'Cachoeiro de Itapemirim', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (17, 'Cariacica', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (18, 'Castelo', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (19, 'Colatina', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (20, 'Conceição da Barra', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (21, 'Conceição do Castelo', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (22, 'Divino de São Lourenço', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (23, 'Domingos Martins', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (24, 'Dores do Rio Preto', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (25, 'Ecoporanga', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (26, 'Fundão', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (27, 'Governador Lindenberg', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (28, 'Guaçuí', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (29, 'Guarapari', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (30, 'Ibatiba', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (31, 'Ibiraçu', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (32, 'Ibitirama', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (33, 'Iconha', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (34, 'Irupi', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (35, 'Itaguaçu', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (36, 'Itapemirim', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (37, 'Itarana', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (38, 'Iúna', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (39, 'Jaguaré', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (40, 'Jerônimo Monteiro', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (41, 'João Neiva', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (42, 'Laranja da Terra', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (43, 'Linhares', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (44, 'Mantenópolis', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (45, 'Marataízes', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (46, 'Marechal Floriano', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (47, 'Marilândia', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (48, 'Mimoso do Sul', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (49, 'Montanha', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (50, 'Mucurici', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (51, 'Muniz Freire', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (52, 'Muqui', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (53, 'Nova Venécia', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (54, 'Pancas', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (55, 'Pedro Canário', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (56, 'Pinheiros', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (57, 'Piúma', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (58, 'Ponto Belo', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (59, 'Presidente Kennedy', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (60, 'Rio Bananal', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (61, 'Rio Novo do Sul', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (62, 'Santa Leopoldina', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (63, 'Santa Maria de Jetibá', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (64, 'Santa Teresa', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (65, 'São Domingos do Norte', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (66, 'São Gabriel da Palha', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (67, 'São José do Calçado', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (68, 'São Mateus', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (69, 'São Roque do Canaã', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (70, 'Serra', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (71, 'Sooretama', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (72, 'Vargem Alta', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (73, 'Venda Nova do Imigrante', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (74, 'Viana', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (75, 'Vila Pavão', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (76, 'Vila Valério', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (77, 'Vila Velha', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (78, 'Vitória', 8);
               INSERT INTO city("id", "name", "state_id") VALUES (79, 'Acrelândia', 1);
               INSERT INTO city("id", "name", "state_id") VALUES (80, 'Assis Brasil', 1);
               INSERT INTO city("id", "name", "state_id") VALUES (81, 'Brasiléia', 1);
               INSERT INTO city("id", "name", "state_id") VALUES (82, 'Bujari', 1);
               INSERT INTO city("id", "name", "state_id") VALUES (83, 'Capixaba', 1);
               INSERT INTO city("id", "name", "state_id") VALUES (84, 'Cruzeiro do Sul', 1);
               INSERT INTO city("id", "name", "state_id") VALUES (85, 'Epitaciolândia', 1);
       `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
           DELETE FROM public.city;
       `);
  }
}
