/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import {
  fetchGangseo,
  fetchGangbuk,
  fetchGuro,
  fetchGeumcheon,
  fetchNowon,
  fetchSeocho,
  fetchEunpyeong,
} from './api/fetch';

export default function Form({ setData }) {
  const previousValues = useRef('');

  const onSubmit = async (formData) => {
    if (formData.keyword === previousValues.current) {
      return;
    }
    try {
      const list = await Promise.all([
        fetchGangseo(formData.keyword),
        fetchGangbuk(formData.keyword),
        fetchGuro(formData.keyword),
        fetchGeumcheon(formData.keyword),
        fetchNowon(formData.keyword),
        fetchSeocho(formData.keyword),
        fetchEunpyeong(formData.keyword),
      ]);

      previousValues.current = formData.keyword;
      setData(list);
    } catch (error) {
      console.error('error', error);
    }
  };

  const { register, handleSubmit } = useForm();
  return (
    <form
      className="flex flex-col gap-4 p-6 rounded-lg border bg-background shadow-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex items-center">
        <input
          {...register('keyword')}
          className="flex hs-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
          placeholder="도서명을 입력하세요."
          type="search"
          name="keyword"
          id="keyword"
        />
        <button
          className="h-10 px-4 text-sm font-medium bg-primary rounded-md   focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
          type="submit"
        >
          검색
        </button>
      </div>
    </form>
  );
}
