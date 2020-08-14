describe('foobar', () => {
  beforeEach(global.resetFetchq);

  it('should fail if the ID is not valid (too short)', async () => {
    const r1 = await global.get('/delete/1');

    const r2 = await global.checkStatus(
      r1.data.subject,
      ['trigger_delete'],
      -1,
    );

    expect(r2).toBe(true);
  });

  it('should complete an ID', async () => {
    const r1 = await global.get('/delete/111');
    const r2 = await global.checkStatus(
      'delete-111',
      ['router_delete'],
      3,
      100,
      14000,
    );
    expect(r2).toBe(true);
  });
});
