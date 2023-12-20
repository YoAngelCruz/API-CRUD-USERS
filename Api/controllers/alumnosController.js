const Alumnos = require('../models/alumnosModel');

const AlumnosController = {
  async crearAlumno(req, res) {
    const {
      nombre,
      clave,
      turno,
      fecha_inicio,
      edad,
      curp,
      domicilio,
      num_tel_a,
      email,
      contraseña,
      tutor,
    } = req.body;
    try {
      await Alumnos.crearAlumno(
        nombre,
        clave,
        turno,
        fecha_inicio,
        edad,
        curp,
        domicilio,
        num_tel_a,
        email,
        contraseña,
        tutor
      );
      res.status(201).json({ message: 'Alumno creado correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el alumno' });
    }
  },

  async obtenerAlumnoPorId(req, res) {
    const { id } = req.params;
    try {
      const alumno = await Alumnos.obtenerAlumnoPorId(id);
      if (!alumno) {
        return res.status(404).json({ message: 'El alumno no se encuentra registrado' });
      }
      
      res.status(200).json(alumno);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el alumno' });
    }
  },

  async obtenerTodosLosAlumnos(req, res) {
    try {
      const alumnos = await Alumnos.obtenerTodosLosAlumnos();
      res.status(200).json(alumnos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener todos los alumnos' });
    }
  },

  async obtenerModulosCursadosPorAlumno(req, res) {
    const { id_alumno } = req.params;
    try {
      const modulosCursados = await Alumnos.obtenerModulosCursadosPorAlumno(id_alumno);
      res.status(200).json(modulosCursados);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los módulos cursados por el alumno' });
    }
  },

  async obtenerModulosConCalificaciones(req, res) {
    const { id_alumno } = req.params;
    try {
      const modulosConCalificaciones = await Alumnos.obtenerModulosConCalificaciones(id_alumno);
      res.status(200).json(modulosConCalificaciones);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los módulos con calificaciones del alumno' });
    }
  },

  async actualizarDatosAlumno(req, res) {
    const { id } = req.params;
    const { nombre, clave, edad, curp, domicilio, num_tel_a, email, turno, fecha_inicio, tutor } = req.body;
    try {
      const alumno = await Alumnos.obtenerAlumnoPorId(id);
  
      if (!alumno) {
        return res.status(404).json({ message: 'El alumno no se encuentra registrado' });
      }

      await Alumnos.actualizarDatosAlumno(id, nombre, clave, edad, curp, domicilio, num_tel_a, email, turno, fecha_inicio, tutor);
      res.status(200).json({ message: 'Datos del alumno actualizados correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar los datos del alumno' });
    }
  },

  async actualizarContraseñaAlumno(req, res) {
    const { id } = req.params;
    const { contraseña } = req.body;
    try {
      const alumno = await Alumnos.obtenerAlumnoPorId(id);
  
      if (!alumno) {
        return res.status(404).json({ message: 'El alumno no se encuentra registrado' });
      }

      await Alumnos.actualizarContraseñaAlumno(id, contraseña);
      res.status(200).json({ message: 'Contraseña del alumno actualizada correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la Contraseña del alumno' });
    }
  },

  async eliminarAlumno(req, res) {
    const { id } = req.params;
    try {
      const alumno = await Alumnos.obtenerAlumnoPorId(id);
      if (!alumno) {
        return res.status(404).json({ message: 'El alumno no se encuentra registrado' });
      }
      
      await Alumnos.eliminarAlumno(id);
      res.status(200).json({ message: 'Alumno eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el alumno' });
    }
  },

  async inscribirseAGrupo(req, res) {
    const { id_alumno, id_grupo, fecha } = req.body;
    try {
      
      await Alumnos.inscribirseAGrupo(id_alumno, id_grupo, fecha);
      res.status(200).json({ message: 'Alumno inscrito correctamente en el grupo' });
    } catch (error) {
      res.status(500).json({ error: 'Error al inscribir el alumno en el grupo' });
    }
  },
};

module.exports = AlumnosController;