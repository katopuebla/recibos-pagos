# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Configuración para despliegue en ambiente de desarrollo
- Soporte para datos mock en desarrollo para Recibos y Gastos
- Implementación de loading y manejo de errores en componentes
- Sistema de deploy en GitHub Pages con subcarpetas para prod/dev

### Changed
- Refactorización del servicio base para soportar entornos múltiples
- Mejora en el manejo de estados de carga y errores
- Optimización de servicios para usar BehaviorSubject

### Fixed
- Corrección en el manejo del loading para evitar problemas de cierre
- Ajuste en el deploy para mantener configuración de desarrollo
- Solución al problema de copiar archivos en subcarpetas durante el deploy

## [1.0.0] - 2025-10-13

### Added
- Primera versión estable del sistema de Recibos y Pagos
- Módulo de gestión de recibos
- Módulo de gestión de gastos
- Sistema de autenticación y roles de usuario
- Integración con hojas de cálculo para almacenamiento

### Changed
- Implementación inicial de la interfaz de usuario con Ionic/Angular
- Configuración del sistema de build y deploy

[Unreleased]: https://github.com/katopuebla/recibos-pagos/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/katopuebla/recibos-pagos/releases/tag/v1.0.0
