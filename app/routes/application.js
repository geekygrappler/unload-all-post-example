import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    this._super(...arguments);
    await this.store.findRecord('post', 1)
    await this.store.unloadAll();

    this.store.peekAll('post')

    await this.store.findRecord('post', 1);
    await this.store.findRecord('post', 2);

    await this.store.unloadAll('post');

    return this.store.peekAll('post');
  }
});
