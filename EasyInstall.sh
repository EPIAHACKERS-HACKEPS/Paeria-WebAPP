#!/bin/bash

# Script de inicialización del proyecto
# Asegúrate de que el archivo tenga permisos de ejecución: chmod +x EasyInstall.sh

echo "Iniciando configuración del proyecto..."

# Verificar si Node.js y Yarn están instalados
echo "Verificando dependencias..."
if ! command -v node &> /dev/null
then
    echo "❌ Node.js no está instalado. Por favor, instálalo antes de continuar."
    exit 1
fi

if ! command -v yarn &> /dev/null
then
    echo "❌ Yarn no está instalado. Instalándolo ahora..."
    npm install -g yarn
fi

# Instalar dependencias del proyecto
echo "Instalando dependencias del proyecto..."
yarn install

# Inicializar Capacitor para la configuración nativa
echo "Inicializando Capacitor..."
yarn capacitor sync

# Configuración adicional para Android
echo "Configurando Android..."
if [ -d "./android" ]; then
    echo "Verificando dependencias de Gradle..."
    cd android || exit
    ./gradlew clean
    ./gradlew build
    cd ..
else
    echo "La carpeta de Android no está disponible. Revisa la estructura del proyecto."
fi

# Configuración adicional para iOS
echo "Configurando iOS..."
if [ -d "./ios" ]; then
    cd ios || exit
    if ! command -v pod &> /dev/null
    then
        echo "CocoaPods no está instalado. Instalándolo ahora..."
        sudo gem install cocoapods
    fi
    pod install
    cd ..
else
    echo "La carpeta de iOS no está disponible. Revisa la estructura del proyecto."
fi

# Construcción del proyecto para desarrollo web
echo "Construyendo proyecto web..."
yarn build

# Mensaje final
echo "Configuración completada. Tu proyecto está listo para usar."
echo "Usa 'yarn dev' para iniciar el entorno de desarrollo."
