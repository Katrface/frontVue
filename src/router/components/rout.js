

export function changeMod(router, typeId, mode) {
    if (mode === 'Заявления'){
        router.push({ name: 'petitions', params: { typeId } });
    }
    else if (mode === 'Ошибки') {
        router.push({ name: 'errors', params: { typeId } });
    }
    else if (mode === 'Проверяющие') {
        router.push({ name: 'TableExaminer' });
    }
    else {

    }
}