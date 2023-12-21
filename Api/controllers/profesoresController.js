const Profesores = require('../models/profesoresModel');

const ProfesoresController = {
  async crearProfesor(req, res) {
    const { nombre, num_tel_p, email, contraseña } = req.body;
    try {
      await Profesores.crearProfesor(nombre, num_tel_p, email, contraseña);
      res.status(201).json({ message: 'Profesor creado correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear el profesor' });
    }
  },

  async obtenerProfesorPorId(req, res) {
    const { id } = req.params;
    try {
      const profesor = await Profesores.obtenerProfesorPorId(id);
      if (!profesor) {
        return res.status(404).json({ message: 'El profesor no se encuentra registrado' });
      }

      res.status(200).json(profesor);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el profesor' });
    }
  },

  async obtenerTodosLosProfesores(req, res) {
    try {
      const profesores = await Profesores.obtenerTodosLosProfesores();
      res.status(200).json(profesores);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener todos los profesores' });
    }
  },

  async obtenerGruposImpartidosPorProfesor(req, res) {
    const { id_profesor } = req.params;
    try {
      const grupos = await Profesores.obtenerGruposImpartidosPorProfesor(id_profesor);
      res.status(200).json(grupos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los grupos impartidos por el profesor' });
    }
  },

  async actualizarDatosProfesor(req, res) {
    const { id } = req.params;
    const { nombre, num_tel_p, email } = req.body;
    try {
      const profesor = await Profesores.obtenerProfesorPorId(id);
  
      if (!profesor) {
        return res.status(404).json({ message: 'El profesor no se encuentra registrado' });
      }

      await Profesores.actualizarDatosProfesor(id, nombre, num_tel_p, email);
      res.status(200).json({ message: 'Datos del profesor actualizados correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar los datos del profesor' });
    }
  },

  async actualizarContraseñaProfesor(req, res) {
    const { id } = req.params;
    const { contraseña } = req.body;
    try {
      const profesor = await Profesores.obtenerProfesorPorId(id);
  
      if (!profesor) {
        return res.status(404).json({ message: 'El profesor no se encuentra registrado' });
      }

      await Profesores.actualizarContraseñaProfesor(id, contraseña);
      res.status(200).json({ message: 'Contraseña del profesor actualizada correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar la contraseña del profesor' });
    }
  },

  async eliminarProfesor(req, res) {
    const { id } = req.params;
    try {
      const profesor = await Profesores.obtenerProfesorPorId(id);
      if (!profesor) {
        return res.status(404).json({ message: 'El profesor no se encuentra registrado' });
      }
      
      await Profesores.eliminarProfesor(id);
      res.status(200).json({ message: 'Profesor eliminado correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al eliminar el profesor' });
    }
  },

  async asignarProfesorAGrupo(req, res) {
    const { id_profesor, id_grupo } = req.body;
    try {
      await Profesores.asignarProfesorAGrupo(id_profesor, id_grupo);
      res.status(200).json({ message: 'Profesor asignado correctamente al grupo' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al asignar el profesor al grupo' });
    }
  },

  async asignarCalificacion(req, res) {
    const { id_grupo, id_alumno, calificacion } = req.body;
    try {
      await Profesores.asignarCalificacion(id_grupo, id_alumno, calificacion);
      res.status(200).json({ message: 'Calificación asignada correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al asignar la calificación' });
    }
  },
};

module.exports = ProfesoresController;