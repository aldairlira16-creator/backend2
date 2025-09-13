const { sequelize, User } = require('../src/models');

(async () => {
  try {
    await sequelize.sync({ force: false });

    const admin = await User.findOne({ where: { email: 'admin@hospital.local' } });
    if (!admin) {
      await User.create({
        name: 'Administrador',
        email: 'admin@hospital.local',
        password: 'admin123',
        role: 'admin',
      });
      console.log('Administrador criado com sucesso!');
    } else {
      console.log('Administrador já existe.');
    }

    process.exit();
  } catch (err) {
    console.error('Erro ao criar admin:', err);
    process.exit(1);
  }
})();
