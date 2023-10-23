import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1696102607729 implements MigrationInterface {
    name = 'CreateUser1696102607729'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."users_gender_enum" AS ENUM('male', 'female', 'no binary', 'I prefer not to say')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(127) NOT NULL, "email" character varying(256) NOT NULL, "password" character varying(120) NOT NULL, "phone" character varying(45) NOT NULL, "birthday" date NOT NULL, "image" text, "gender" "public"."users_gender_enum" NOT NULL DEFAULT 'I prefer not to say', CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_gender_enum"`);
    }

}
