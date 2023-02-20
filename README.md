## Затраченное время на текущую версию проекта - ~91 час

# Инструкция по запуску проекта

## Установка зависимостей

### Перейдите в директорию с проектом в терминале и выполните команду: npm i
```
npm i
```

## Переменные окружения

#### Создайте файл .backend.env в директории /environments по примеру /environments.backend.env-example

```
JWT_ACCESS_SECRET=secret                                            - секрет для JWT 
DATABASE_URL=postgres://admin:test@localhost:5432/guitar-shop       - url для подключения к базе данных
UPLOAD_DESTINATION='./upload'                                       - директория для загрузки файлов
PORT=3333                                                           - номер порта для запуска сервера
HOST=localhost                                                      - хост сервера
```

## Запуск Docker

### 1. Запустите десктопное приложение Docker Desktop

### 2. Разверните docker контейнер для сервиса Users:

```
/docker-compose.yml

docker-compose up -d
```


## Запуск проекта

### Выполните генерацию типов для Prisma

```
nx run backend:db-generate
```

### Выполните миграцию в базу данных

```
nx run backend:db-migrate
```

### Для запуска сервисов, введите следующую команду в терминале:

```
nx run-many --target=serve --projects=backend,client
```

# Сценарии

## Backend

### Генерация типов для Prisma

```
nx run backend:db-generate
```

### Валидация схемы Prisma

```
nx run backend:db-validate
```

### Сброс базы данных

```
nx run backend:db-reset
```

### Миграция в базу данных

```
nx run backend:db-migrate
```

### Запуск сервера

```
nx run backend:serve
```

### Проверка проекта линтером

```
nx run backend:lint
```

### Сборка проекта

```
nx run backend:build
```

## Client

### Запуск клиента

```
nx run client:serve
```

### Проверка проекта линтером

```
nx run client:lint
```

### Сборка проекта

```
nx run client:build
```
