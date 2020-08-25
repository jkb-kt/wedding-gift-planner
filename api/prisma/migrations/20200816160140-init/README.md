# Migration `20200816160140-init`

This migration has been generated by Jakub at 8/16/2020, 6:01:40 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."User" (
"id" text  NOT NULL ,
PRIMARY KEY ("id"))

CREATE TABLE "public"."Wedding" (
"id" text  NOT NULL ,
"name" text  NOT NULL ,
"guests" text []  ,
PRIMARY KEY ("id"))

CREATE TABLE "public"."Gift" (
"id" text  NOT NULL ,
"name" text  NOT NULL ,
"weddingId" text  NOT NULL ,
PRIMARY KEY ("id"))

ALTER TABLE "public"."Gift" ADD FOREIGN KEY ("weddingId")REFERENCES "public"."Wedding"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200816160140-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,26 @@
+datasource postgresql {
+  url = "***"
+  provider = "postgresql"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model User {
+  id String @id
+}
+
+model Wedding {
+  id     String   @id @default(cuid())
+  name   String
+  gifts  Gift[]
+  guests String[]
+}
+
+model Gift {
+  id        String  @id @default(cuid())
+  name      String
+  wedding   Wedding @relation(fields: [weddingId], references: [id])
+  weddingId String
+}
```

