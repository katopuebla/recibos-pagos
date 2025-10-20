# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2025-10-20

### Added

- Agregar la funcionalidad de refijo, para clasificar de quien pertenece un recibo.

### Changed

- Add prefix functionality and update related components
- Introduced prefix selection in add-recibos component for user roles.
- Enhanced add-gastos component to use selected date from form.
- Added prefix handling in RecibosService and updated mocks for testing.
- Updated interfaces to include prefix properties.
- Enable prefix selection for authorized roles in add-recibos component.
- Add getEntitiesByNameRange method and update RecibosService (#45).

### Fix

- correct typo in disabled attribute and update folio calculation; improve type handling in service (#443, #44).
- se agregó 404.html y comodín en rounting (#42).

## [1.0.1] - 2025-10-1

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

## [1.0.0] - 2025-07-24

### Added

- Primera versión estable del sistema de Recibos y Pagos.
- Módulo de gestión de recibos.
- Módulo de gestión de gastos.
- Sistema de autenticación y roles de usuario.
- Integración con hojas de cálculo para almacenamiento.

### Changed

- Implementación inicial de la interfaz de usuario con Ionic/Angular.
- Configuración del sistema de build y deploy.

[Unreleased]: https://github.com/katopuebla/recibos-pagos/compare/v1.1.1...HEAD
[1.1.0]: https://github.com/katopuebla/recibos-pagos/releases/tag/1.1.0
[1.0.0]: https://github.com/katopuebla/recibos-pagos/releases/tag/1.0.0
