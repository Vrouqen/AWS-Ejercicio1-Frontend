# Usar la imagen base de Python 3.8
FROM python:3.8

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar todos los archivos del directorio actual al contenedor
COPY . .

# Instalar las dependencias listadas en requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Exponer el puerto 667
EXPOSE 667

# Comando para ejecutar la aplicación (suponiendo que el archivo principal se llama 'app.py')
CMD ["python", "app.py"]
