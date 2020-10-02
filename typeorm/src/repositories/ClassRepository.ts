import { EntityRepository, Repository } from 'typeorm';
import Class from '../models/Class';

// esse decorator fica acima da classe representando que ela é uma classe de repositório
@EntityRepository(Class)
export default class ClassRepository extends Repository<Class> {
  public async findByName(name: string): Promise<Class[]> {
    // this está se referindo ao entity
    return this.find({
      where: {
        name,
      },
    });
  }
}
